/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConsumptionManagementClient } = require("@azure/arm-consumption");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.
 *
 * @summary Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/PriceSheetExpand.json
 */
async function priceSheetExpand() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const expand = "meterDetails";
  const billingPeriodName = "201801";
  const options = { expand };
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const result = await client.priceSheet.getByBillingPeriod(billingPeriodName, options);
  console.log(result);
}

priceSheetExpand().catch(console.error);

/**
 * This sample demonstrates how to Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.
 *
 * @summary Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/PriceSheetForBillingPeriod.json
 */
async function priceSheetForBillingPeriod() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const billingPeriodName = "201801";
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const result = await client.priceSheet.getByBillingPeriod(billingPeriodName);
  console.log(result);
}

priceSheetForBillingPeriod().catch(console.error);
