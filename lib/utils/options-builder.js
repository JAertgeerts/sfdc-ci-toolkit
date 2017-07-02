const envalid = require('envalid');
const { str, url, bool, num } = envalid;

const env = envalid.cleanEnv(process.env, {
    SF_VERSION:         num(),
    SF_USERNAME:        str(),
    SF_PASSWORD:        str(),
    SF_SERVERURL:       url(),
    SF_TESTLEVEL:       str(),
    SF_RUNTESTS:        str(),
    SF_CHECKONLY:       bool(),
    SF_TESTSUFFIX:      str(),
    SF_SRC_PATH:        str(),
    SF_REPO_PATH:       str(),
    POST_SCRIPT_PATH:   str(),
    PRE_SCRIPT_PATH:    str()
})

module.exports = {
  'username': process.env.SF_USERNAME,
  'password': process.env.SF_PASSWORD,
  'loginUrl': process.env.SF_SERVERURL,
  'pollTimeout': process.env.SF_POLLTIMEOUT || 5000*1000,
  'pollInterval': process.env.SF_POLLINTERVAL || 10*1000,
  'version': process.env.SF_VERSION,
  'checkOnly' : process.env.SF_CHECKONLY,
  'testLevel' : ((process.env.SF_TESTLEVEL === 'RunSpecifiedTests' && process.env.SF_RUNTESTS !== '') || process.env.SF_TESTLEVEL !== 'RunSpecifiedTests') ? process.env.SF_TESTLEVEL : 'RunLocalTests',
  'runTests' : (process.env.SF_TESTLEVEL === 'RunSpecifiedTests' && process.env.SF_RUNTESTS !== '') ? process.env.SF_RUNTESTS.split(',') : undefined,
  'singlePackage' : process.env.SF_SINGLEPACKAGE || true,
  'rollbackOnError' : process.env.SF_ROLLBACKONERROR || true,
  'ignoreWarnings' : process.env.SF_IGNOREWARNINGS || true,
  'allowMissingFiles' : process.env.SF_ALLOWMISSINGFILES || true,
  'verbose' : process.env.SF_VERBOSE || true,
  'src' : process.env.SF_SRC_PATH,
  'repo' : process.env.SF_REPO_PATH,
  'commit': process.env.BITBUCKET_COMMIT,
  'repoToken': process.env.CODECLIMATE_REPO_TOKEN,
  'branch': process.env.BITBUCKET_BRANCH,
  'postScript' : process.env.POST_SCRIPT_PATH,
  'preScript' : process.env.PRE_SCRIPT_PATH,
  'testSuffix' : process.env.SF_TESTSUFFIX
};