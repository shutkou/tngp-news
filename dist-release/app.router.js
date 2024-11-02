"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const router_1 = require("@nestjs/core/router");
const content_module_1 = require("./controllers/content/content.module");
const api_module_1 = require("./controllers/api/api.module");
exports.AppRouter = router_1.RouterModule.register([
    {
        path: 'api',
        module: api_module_1.ApiModule,
    },
    {
        path: '*',
        module: content_module_1.ContentModule,
    },
]);
//# sourceMappingURL=app.router.js.map