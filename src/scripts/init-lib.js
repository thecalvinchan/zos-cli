import LocalLibController from  '../models/local/LocalLibController'

export default async function initLib({ name, version, force = false, packageFileName = undefined }) {
  if (!name) throw Error('A project name must be provided to initialize the project.')
  
  const libController = new LocalLibController(packageFileName)
  libController.init(name, version, force)
  libController.writePackage()
}
