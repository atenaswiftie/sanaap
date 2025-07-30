export const invalidMessages = <T extends { [key: string]: any }>(error: T) =>
  Object.keys(error).reduce((prev, current) => {
    const err = error?.[current as keyof T];
    if (Array.isArray(err)) {
      return (
        prev +
        err
          .map((allItem: any) =>
            Object.keys(allItem)
              .map((item) => allItem[item]?.message ?? "")
              .join("\n")
          )
          .join("\n")
      );
    }
    return prev + (err?.message ?? "") + "\n";
  }, "");
