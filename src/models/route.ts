/* eslint-disable @typescript-eslint/ban-types */
import { FunctionComponent, ReactElement, ReactNode} from 'react';

interface IRoute {
    path: string,
    component: FunctionComponent<{}> | any
} 
export type {IRoute};