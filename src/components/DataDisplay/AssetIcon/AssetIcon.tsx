import type {AssetIconProps} from './types';
import type {FunctionComponent} from 'react';

import {Btc, Dai, Eth, Eur, Tmn, Usd, Usdt, WallpayLogoSq, Xaut, XCoin} from '@wallpay/icons';

const COMPONENTS = {
  usdt: Usdt,
  eth: Eth,
  btc: Btc,
  tmn: Tmn,
  dai: Dai,
  xaut: Xaut,
  usd: Usd,
  eur: Eur,
  tmnf: WallpayLogoSq,
};

export const AssetIcon: FunctionComponent<AssetIconProps> = (props) => {
  const {symbol, ...rest} = props;

  const Component = COMPONENTS[symbol?.toLocaleLowerCase() as keyof typeof COMPONENTS];

  if (!Component) {
    return <XCoin {...(rest as any)} />;
  }

  return <Component {...(rest as any)} />;
};
