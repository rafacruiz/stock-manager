# 🧱 Colecciones definitivas (v1.3)

Estas serán las colecciones del sistema:

* users
* stores
* warehouses
* products
* categories
* units
* suppliers
* stocks
* stockMovements
* orders

---

## 👤 User Schema

```json
{
  "nombre": "String",
  "email": {
    "type": "String",
    "unique": true,
    "required": true
  },
  "passwordHash": "String",
  "role": {
    "type": "String",
    "enum": ["admin", "store"]
  },
  "storeId": {
    "type": "ObjectId",
    "ref": "Store",
    "default": null
  },
  "activo": {
    "type": "Boolean",
    "default": true
  }
}
```

### Índices importantes

* `email` → unique
* `role`

---

## 🏪 Store Schema

```json
{
  "nombre": "String",
  "direccion": "String",
  "telefono": "String",
  "email": "String",
  "activo": {
    "type": "Boolean",
    "default": true
  }
}
```

---

## 🏬 Warehouse Schema

```json
{
  "nombre": "String",
  "direccion": "String",
  "activo": {
    "type": "Boolean",
    "default": true
  }
}
```

---

## 📦 Category Schema

```json
{
  "nombre": "String",
  "descripcion": "String",
  "activa": {
    "type": "Boolean",
    "default": true
  }
}
```

---

## 📏 Unit Schema

Editable por admin.

```json
{
  "nombre": "String",
  "abreviatura": "String"
}
```

**Ejemplo:**

* Unidad
* Kilogramo
* Litro
* Caja

---

## 🚚 Supplier Schema

Solo algunos productos tendrán proveedor.

```json
{
  "nombre": "String",
  "telefono": "String",
  "email": "String",
  "direccion": "String",
  "activo": {
    "type": "Boolean",
    "default": true
  }
}
```

---

## 📦 Product Schema (muy importante)

```json
{
  "nombre": "String",
  "descripcion": "String",
  "sku": {
    "type": "String",
    "unique": true
  },
  "codigoBarras": "String",
  "categoriaId": {
    "type": "ObjectId",
    "ref": "Category"
  },
  "unidadId": {
    "type": "ObjectId",
    "ref": "Unit"
  },
  "proveedores": [
    {
      "type": "ObjectId",
      "ref": "Supplier"
    }
  ],
  "precio": "Number",
  "stockMinimo": "Number",
  "imagenes": [
    {
      "url": "String",
      "publicId": "String"
    }
  ],
  "activo": {
    "type": "Boolean",
    "default": true
  }
}
```

### Índices importantes

* `sku` → unique
* `categoriaId`

---

## 📦 Stock Schema (núcleo del sistema)

Uno por:

**producto + almacén**

```json
{
  "productId": {
    "type": "ObjectId",
    "ref": "Product"
  },
  "warehouseId": {
    "type": "ObjectId",
    "ref": "Warehouse"
  },
  "cantidad": {
    "type": "Number",
    "default": 0
  },
  "reservado": {
    "type": "Number",
    "default": 0
  }
}
```

### Índice crítico

* `(productId + warehouseId)` → unique

---

## 📜 StockMovement Schema (MUY importante)

Esto guarda el historial.

```json
{
  "productId": "ObjectId",
  "warehouseId": "ObjectId",
  "tipo": {
    "type": "String",
    "enum": [
      "entrada",
      "salida",
      "reserva",
      "liberacion",
      "ajuste"
    ]
  },
  "cantidad": "Number",
  "referenciaTipo": {
    "type": "String",
    "enum": [
      "order",
      "purchase",
      "manual"
    ]
  },
  "referenciaId": "ObjectId",
  "usuarioId": "ObjectId",
  "fecha": {
    "type": "Date",
    "default": "Date.now"
  }
}
```

Esto será clave para:

* auditoría
* errores
* control real

---

## 🧾 Order Schema (muy importante)

```json
{
  "storeId": {
    "type": "ObjectId",
    "ref": "Store"
  },
  "warehouseId": {
    "type": "ObjectId",
    "ref": "Warehouse"
  },
  "estado": {
    "type": "String",
    "enum": [
      "draft",
      "pending",
      "confirmed",
      "preparing",
      "ready",
      "shipped",
      "cancelled"
    ]
  },
  "items": [
    {
      "productId": "ObjectId",
      "cantidad": "Number",
      "cantidadPreparada": {
        "type": "Number",
        "default": 0
      }
    }
  ],
  "notas": "String",
  "fechaPedido": "Date",
  "fechaConfirmacion": "Date"
}
```

---

## 📊 Picking List

**Ruta:**

```
GET /reports/picking
```

**Resultado:**

* Producto A → 34 uds
* Producto B → 12 uds
* Producto C → 5 uds

**Calculado desde:**

* orders `confirmed` + `preparing`

---

## 📉 Purchase List

**Ruta:**

```
GET /reports/purchase
```

**Resultado:**

* Producto A → comprar 8
* Producto B → comprar 2

**Basado en:**

* stock disponible vs pedidos

---

## 🧱 Estructura real del Backend

```bash
backend/
 ├── src/
 │   ├── config/
 │   │    db.js
 │   │
 │   ├── models/
 │   │    User.js
 │   │    Store.js
 │   │    Warehouse.js
 │   │    Category.js
 │   │    Unit.js
 │   │    Supplier.js
 │   │    Product.js
 │   │    Stock.js
 │   │    StockMovement.js
 │   │    Order.js
 │   │
 │   ├── controllers/
 │   ├── services/
 │   ├── routes/
 │   ├── middlewares/
 │   ├── validations/
 │   ├── utils/
 │   │
 │   ├── app.js
 │   └── server.js
 │
 ├── package.json
 └── .env
```

---

## ⚛️ Estructura Frontend

```bash
frontend/
 ├── src/
 │   ├── api/
 │   ├── components/
 │   ├── layouts/
 │   ├── pages/
 │   ├── routes/
 │   ├── store/
 │   ├── hooks/
 │   └── utils/
```
