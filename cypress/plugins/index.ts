/* eslint-disable import/no-anonymous-default-export */
/// <reference types="cypress" />

import admin from "firebase-admin";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
export default (
  on: Cypress.PluginEvents,
  config: Partial<Cypress.PluginConfigOptions>
) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const extendedConfig = cypressFirebasePlugin(on, config, admin);

  return extendedConfig;
};
