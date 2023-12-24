// hardhat.d.ts
import 'hardhat/types/config';
import 'hardhat/types/runtime';
import { DeploymentsExtension } from 'hardhat-deploy/dist/types';
import { GetNamedAccounts } from 'hardhat-deploy/types';

declare module 'hardhat/types/runtime' {
  export interface HardhatRuntimeEnvironment {
    deployments: DeploymentsExtension;
    getNamedAccounts: GetNamedAccounts;
  }
}

// O módulo '"hardhat-deploy/types"' não tem nenhum membro exportado 'GetNamedAccounts'.
