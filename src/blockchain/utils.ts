import Web3 from 'web3';
import { rpcUrl } from './constants';
export const createWeb3 = (provider) => {
    var realProvider;
  
    if (typeof provider === 'string') {
      if (provider.includes('wss')) {
        realProvider = new Web3.providers.WebsocketProvider(
          provider
        );
      } else {
        realProvider = new Web3.providers.HttpProvider(
          provider
        );
      }
    } else {
      realProvider = provider;
    }
  
    return new Web3(realProvider);
  }
export const getDefaultWeb3 = () => {
    return createWeb3(rpcUrl)
}