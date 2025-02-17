/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Adds new or replaces existing certificate.
 *
 * @summary Adds new or replaces existing certificate.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_certificatescreateorupdate.json
 */
const { IotHubClient } = require("@azure/arm-iothub");
const { DefaultAzureCredential } = require("@azure/identity");

async function certificatesCreateOrUpdate() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "iothub";
  const certificateName = "cert";
  const certificateDescription = {
    properties: { certificate: "############################################" },
  };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.certificates.createOrUpdate(
    resourceGroupName,
    resourceName,
    certificateName,
    certificateDescription
  );
  console.log(result);
}

certificatesCreateOrUpdate().catch(console.error);
