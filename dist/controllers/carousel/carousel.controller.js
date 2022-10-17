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
exports.CarouselController = void 0;
const common_1 = require("@nestjs/common");
const image_carousel_dto_1 = require("../../database/schemas/image-carousel.dto");
const carousel_service_1 = require("../../services/carousel/carousel.service");
let CarouselController = class CarouselController {
    constructor(carouselService) {
        this.carouselService = carouselService;
    }
    async getImages() {
        try {
            let response = await this.carouselService.getAllImages();
            return response;
        }
        catch (e) {
            return e;
        }
    }
    async newImage(image) {
        try {
            let response = await this.carouselService.newImage(image);
            return response;
        }
        catch (e) {
            return e;
        }
    }
    async removeImage(param) {
        try {
            let response = await this.carouselService.removeImage(param.id);
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
], CarouselController.prototype, "getImages", null);
__decorate([
    (0, common_1.Post)('new-image'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_carousel_dto_1.ImageCarousel]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "newImage", null);
__decorate([
    (0, common_1.Post)('remove-image/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "removeImage", null);
CarouselController = __decorate([
    (0, common_1.Controller)('carousel'),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselController);
exports.CarouselController = CarouselController;
//# sourceMappingURL=carousel.controller.js.map