// Importar módulos Hardhat
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

// Definir a função de implantação
const func: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy do contrato
  await deploy('NFTContract', {
    from: deployer,
    args: [], // Argumentos do construtor, se houver
    log: true,
  });
};

// Exportar a função de implantação
export default func;
