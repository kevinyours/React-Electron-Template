import { init } from '@sentry/electron';

export default function activateCrashReporter({
    dsn,
    crashReporter,
}: {
    dsn: string;
    crashReporter: Electron.CrashReporter;
}): void {
    init({
        dsn: dsn,
    });

    crashReporter.start({
        companyName: 'MyCompany',
        productName: 'MyProduct',
        uploadToServer: true,
        ignoreSystemCrashHandler: true,
        submitURL: dsn,
    });
}
