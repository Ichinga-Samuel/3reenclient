module.exports = {
    buildCommand: () => 'yarn build',
    testCommandBeforeRelease: () => 'yarn test:ci',
    afterPublish: ({ exec }) => {
        exec(`git config --global user.email "amaitarihezekiah@gmail.com"`);
        exec(`git config --global user.name "Biosmatrix"`);

        exec('git checkout develop');
        exec('git merge main');
        exec('git push origin develop');
    },
};
