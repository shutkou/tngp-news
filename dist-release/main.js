"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'debug'],
    });
    app.useStaticAssets((0, path_1.join)(__dirname, 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, 'public'));
    console.log(`views path: ${(0, path_1.join)(__dirname, 'public')}`);
    app.setViewEngine('hbs');
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map