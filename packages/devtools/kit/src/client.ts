/* eslint-disable max-classes-per-file */
import { Entrypoint } from '@modern-js/types/cli';
import logo from './logo';
import { FileSystemRoutes } from './server';

export interface ClientFunctions {
  refresh: () => void;
  updateFileSystemRoutes: (param: {
    entrypoint: Entrypoint;
    routes: FileSystemRoutes;
  }) => void;
}

export class NameDefinition {
  formalName: string = 'Modern.js';

  casualName: string = 'modern.js';

  prefixName: string = '_modern_js';
}

export interface ShortenAlias {
  replace: string | RegExp;
  to: string;
}

export class PackageDefinition {
  appTools: string = '@modern-js/app-tools';
}

export class AssetDefinition {
  logo: string = logo;
}

export class AnnouncementDefinition {
  src: string =
    'https://raw.githubusercontent.com/web-infra-dev/modern.js/main/ANNOUNCEMENT.md';

  fallback: string = 'https://modernjs.dev/';
}

export class ClientDefinition {
  name: NameDefinition = new NameDefinition();

  packages: PackageDefinition = new PackageDefinition();

  assets: AssetDefinition = new AssetDefinition();

  announcement: AnnouncementDefinition = new AnnouncementDefinition();
}

export interface IframeTabView {
  type: 'iframe';
  src: string;
}

export type CustomTabView = IframeTabView;

export interface CustomTab {
  name: string;
  title: string;
  view: CustomTabView;
  icon?: string;
}
