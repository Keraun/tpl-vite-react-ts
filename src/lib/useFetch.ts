import { useRequest } from "ahooks";

export default function useFetch(Service: any, options?: any) {
    return useRequest<any, any>(Service, options);
};