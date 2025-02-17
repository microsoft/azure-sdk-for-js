/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  EndpointsImpl,
  ProfilesImpl,
  GeographicHierarchiesImpl,
  HeatMapImpl,
  TrafficManagerUserMetricsKeysImpl
} from "./operations";
import {
  Endpoints,
  Profiles,
  GeographicHierarchies,
  HeatMap,
  TrafficManagerUserMetricsKeys
} from "./operationsInterfaces";
import { TrafficManagerManagementClientOptionalParams } from "./models";

export class TrafficManagerManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the TrafficManagerManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: TrafficManagerManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: TrafficManagerManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-trafficmanager/6.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2018-08-01";
    this.endpoints = new EndpointsImpl(this);
    this.profiles = new ProfilesImpl(this);
    this.geographicHierarchies = new GeographicHierarchiesImpl(this);
    this.heatMap = new HeatMapImpl(this);
    this.trafficManagerUserMetricsKeys = new TrafficManagerUserMetricsKeysImpl(
      this
    );
  }

  endpoints: Endpoints;
  profiles: Profiles;
  geographicHierarchies: GeographicHierarchies;
  heatMap: HeatMap;
  trafficManagerUserMetricsKeys: TrafficManagerUserMetricsKeys;
}
