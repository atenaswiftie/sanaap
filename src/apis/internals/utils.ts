import { createWriteStream } from "fs";
import { dirname, resolve } from "path";

import axios from "axios";
import { camel } from "radash";

export async function downloadFile(
  fileUrl: string,
  outputLocationPath: string
): Promise<void> {
  const writer = createWriteStream(outputLocationPath);

  return axios
    .get(fileUrl, {
      responseType: "stream",
    })
    .then((response) => {
      return new Promise((resolve, reject) => {
        let error: Error | null | undefined = null;

        response.data.pipe(writer);

        writer.on("error", (writeError: any) => {
          error = writeError;
          writer.close();

          reject(error);
        });

        writer.on("close", () => {
          if (!error) {
            resolve();
          }
        });
      });
    });
}

export const configFactory = (name: string, postfix?: string) => {
  const operations: string[] = [];
  const path = resolve(__dirname, `temp/${name}.json`);

  const operationNameFunction = (operation: any, path: string) => {
    const operationName = (() => {
      const summery = camel(String(operation.summary ?? ""));
      const name = [summery, postfix, "API"].filter(Boolean).join(" ");

      if (operations.includes(name)) {
        const splittedPath = path.split("/");

        return [camel(splittedPath.at(-2) + "_" + summery), "API"].join(" ");
      }

      return name;
    })();

    operations.push(operationName);

    return operationName;
  };

  return {
    output: {
      mock: false,
      clean: true,
      mode: "single",
      client: "react-query",
      schemas: resolve(dirname(__dirname), `resources/${name}/types`),
      target: resolve(dirname(__dirname), `resources/${name}/index.ts`),
      override: {
        useTypeOverInterfaces: true,
        operationName: operationNameFunction,
        mutator: {
          path: resolve(__dirname, `clients/${name}.ts`),
          name: `${name}Mutator`,
        },
      },
    },
    hooks: {
      afterAllFilesWrite: "npm run swagger:lint",
    },
    input: {
      target: path,
    },
  } as const;
};
