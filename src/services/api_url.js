
import {BASE_URL} from "../utils";
export const API_BASE_URL = `${BASE_URL}/api`;
export const API_ENDPOINTS_ADV = {
  add_adv: "/Advertisement/Add-Advertisement",
  edit_adv: "/Advertisement/Update-Advertisement",
  get_id_adv: "/Advertisement/Get-Advertisement-By-Id",
  getall_adv: "/Advertisement/Get-All-Advertisements",
  delete_adv: "/Advertisement/Delete-Advertisement",
  post_disable_adv: "/Advertisement/Disable-Ad",
};

export const API_ENDPOINTS_ORG = {
  get_org: "/Organization",
  get_id_org: "/Organization/Get-Organization-By-Id",
  get_all_org: "/Organization/Get-All-Organization",
  add_org: "/Organization/Get-All-Organization",
  edit_org: "/Organization/Update-Organization",
  delete_org: "/Organization/1",
};

export const API_BASE_URL_File = {
  get_all_org: "/File/Get-All-File",
};
