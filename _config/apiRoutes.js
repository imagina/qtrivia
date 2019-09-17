const moduleName = 'itrivia';
const moduleVersion = 'v1';
const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  trivias: `${urlBase}/trivias`,
  questions: `${urlBase}/questions`,
  answers: `${urlBase}/answers`,
  rangepoints: `${urlBase}/range-points`,
}
