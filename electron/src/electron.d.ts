/**
 * The few Electron main-process APIs this plugin uses. Electron itself is provided by the app
 * at run time (`electron` is external in the bundle); declaring them here spares a devDependency
 * on the whole Electron download just for its types.
 */
declare module 'electron' {
  interface WebContents {
    getURL(): string;
    on(event: 'did-navigate', listener: (event: unknown, url: string) => void): this;
  }

  const app: {
    on(event: 'web-contents-created', listener: (event: unknown, contents: WebContents) => void): void;
  };

  const webContents: {
    getAllWebContents(): WebContents[];
  };
}
