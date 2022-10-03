"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeatsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const meats_controller_1 = require("../../controllers/meats/meats.controller");
const meats_schema_1 = require("../../database/schemas/meats.schema");
const meats_service_1 = require("../../services/meats/meats.service");
let MeatsModule = class MeatsModule {
};
MeatsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: meats_schema_1.Meats.name, schema: meats_schema_1.MeatsSchema }])],
        controllers: [meats_controller_1.MeatsController],
        providers: [meats_service_1.MeatsService]
    })
], MeatsModule);
exports.MeatsModule = MeatsModule;
//# sourceMappingURL=meats.module.js.map