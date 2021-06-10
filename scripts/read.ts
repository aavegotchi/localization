import debug from "debug";
const log = debug(`*`);
import secret from "../secret.json";

import crowdin, { Credentials } from '@crowdin/crowdin-api-client';
const credentials: Credentials = {
  token: secret.crowdin_api,
  // organization: 'aavegotchi-localization' // other error org not found
}
const { projectsGroupsApi } = new crowdin(credentials);

const main = async () => {
  try {
    const data = await projectsGroupsApi.listProjects();
    log(data);
  } catch(e) {
    log(`Error: `, e);
  }
};

main();
