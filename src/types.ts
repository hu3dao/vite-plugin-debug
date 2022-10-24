export interface IDebugConfig {
  enabled?: boolean;
  apply?: 'serve' | 'build' | undefined;
  tool?: 'vconsole' | 'eruda';
  src?: string | undefined;
  code?: string | undefined;
  enabledByKey?: string;
  enabledByValue?: string;
}
