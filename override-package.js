const fs = require('fs');
const PACKAGE_JSON_PATH = './package.json';
const packageJson = require(PACKAGE_JSON_PATH);
const basePackageJson = Object.assign({}, packageJson);
const devPackageJson = require('./package-dev.json');
const prodPackageJson = require('./package-prod.json');

// 업데이트를 위한 패키징 관련 Key 삭제
delete basePackageJson['name'];
delete basePackageJson['build'];

if (process.env.NODE_ENV === 'PRODUCTION') {
    const packageJsonProd = { ...basePackageJson, ...prodPackageJson };
    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJsonProd, null, 2));
} else {
    const packageJsonDev = { ...basePackageJson, ...devPackageJson };
    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJsonDev, null, 2));
}
