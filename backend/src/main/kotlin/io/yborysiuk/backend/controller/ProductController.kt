package io.yborysiuk.backend.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/products")
class ProductController {

    @GetMapping fun products(): List<Product> {
        return listOf(
                Product(0, "First product", 90.02),
                Product(1, "Second product", 70.75),
                Product(2, "Third product", 120.10))
    }
}