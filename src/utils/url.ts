import { Params } from "../interfaces/params";

export const url = (url: URL, params?: Params) => {
  if (params) {
    const query = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key as keyof typeof params]) {
        //tuve que poner el ignore porque arrojaba un error que podria ser indefinido, sin embargo en este if ya se valida que no sea indefinido
        // @ts-ignore
        query.append(key, params[key as keyof typeof params]?.toString());
      }
    });
    return url.toString() + "?" + query.toString();
  }
  return url.toString();
};
