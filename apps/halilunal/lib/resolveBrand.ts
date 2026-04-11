import { halilunal } from "@/brands/halilunal";
import { serviroad } from "@/brands/serviroad";

export function resolveBrand(host: string) {
  if (host.includes("serviroad")) return serviroad;
  if (host.includes("halilunal")) return halilunal;

  return halilunal; // default
}