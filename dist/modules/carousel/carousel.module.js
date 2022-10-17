"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCarouselModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const carousel_controller_1 = require("../../controllers/carousel/carousel.controller");
const image_carousel_dto_1 = require("../../database/schemas/image-carousel.dto");
const carousel_service_1 = require("../../services/carousel/carousel.service");
let ImageCarouselModule = class ImageCarouselModule {
};
ImageCarouselModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: image_carousel_dto_1.ImageCarousel.name, schema: image_carousel_dto_1.ImageCarouselSchema }])],
        controllers: [carousel_controller_1.CarouselController],
        providers: [carousel_service_1.CarouselService]
    })
], ImageCarouselModule);
exports.ImageCarouselModule = ImageCarouselModule;
//# sourceMappingURL=carousel.module.js.map