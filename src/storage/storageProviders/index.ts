import type { StorageProvider } from "@/types";
import localSTorageProvider from "./localSTorageProvider";

const storageProvider: StorageProvider = localSTorageProvider

export default storageProvider