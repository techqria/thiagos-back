"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeatsController = void 0;
const common_1 = require("@nestjs/common");
const meats_schema_1 = require("../../database/schemas/meats.schema");
const meats_service_1 = require("../../services/meats/meats.service");
let MeatsController = class MeatsController {
    constructor(meatsService) {
        this.meatsService = meatsService;
    }
    async getMeats() {
        try {
            let response = await this.meatsService.getAll();
            return response;
        }
        catch (e) {
            return e;
        }
    }
    async getMeatById(param) {
        try {
            let response = await this.meatsService.getById(param.id);
            return response;
        }
        catch (e) {
            return e;
        }
    }
    async newMeat(meat) {
        try {
            let response = await this.meatsService.newMeat(meat);
            return response;
        }
        catch (e) {
            return e;
        }
    }
    async removeMeat(param) {
        try {
            let response = await this.meatsService.removeMeat(param.id);
            return response;
        }
        catch (e) {
            return e;
        }
    }
    async updateMeat(param, meat) {
        try {
            let response = await this.meatsService.updateMeat(param.id, meat);
            return response;
        }
        catch (e) {
            return e;
        }
    }
};
__decorate([
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MeatsController.prototype, "getMeats", null);
__decorate([
    (0, common_1.Get)('get-meat/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeatsController.prototype, "getMeatById", null);
__decorate([
    (0, common_1.Post)('new-meat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meats_schema_1.Meats]),
    __metadata("design:returntype", Promise)
], MeatsController.prototype, "newMeat", null);
__decorate([
    (0, common_1.Post)('remove-meat/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeatsController.prototype, "removeMeat", null);
__decorate([
    (0, common_1.Put)('update-meat/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeatsController.prototype, "updateMeat", null);
MeatsController = __decorate([
    (0, common_1.Controller)('meats'),
    __metadata("design:paramtypes", [meats_service_1.MeatsService])
], MeatsController);
exports.MeatsController = MeatsController;
//# sourceMappingURL=meats.controller.js.map