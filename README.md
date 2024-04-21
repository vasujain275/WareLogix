# WareLogix

### Purpose:

"WareLogix" is a sophisticated inventory management and order fulfillment system designed to meet the diverse needs of warehouse administrators, delivery personnel, and system administrators. It offers advanced functionalities for inventory tracking, stock replenishment, order processing, delivery management, and comprehensive analytics. With features tailored for different user roles and enriched product data points including sellers and prices, WareLogix aims to optimize warehouse operations, streamline order fulfillment, and enhance customer satisfaction in the logistics domain.

### Routes:

1. **Authentication:**

    - **POST `/api/auth/login`**
        - Purpose: Authenticate users (warehouse administrators, delivery personnel) and generate JWT tokens for accessing system functionalities.

2. **Warehouse Administration:**

    - **GET `/api/admin/inventory`**
        - Purpose: Retrieve inventory details including stock levels, SKU information, product sellers, prices, and replenishment status for warehouse administrators.

    - **POST `/api/admin/replenish/:id`**
        - Purpose: Initiate a stock replenishment request for a specific inventory item, specifying the quantity and source of replenishment (e.g., supplier, internal transfer).

    - **PUT `/api/admin/replenish/:id`**
        - Purpose: Update the status of a replenishment request, including confirmation of receipt, processing status, and completion, accessible to warehouse administrators.

    - **GET `/api/admin/orders/unassigned`**
        - Purpose: Retrieve a list of orders that are pending assignment to delivery partners.

    - **PUT `/api/admin/orders/assign/:order_id`**
        - Purpose: Assign a specific order to a delivery partner for fulfillment.

3. **Product Management:**

    - **GET `/api/products`**
        - Purpose: Retrieve a list of available products with detailed information including name, description, seller, price, and stock availability.

    - **GET `/api/products/:id`**
        - Purpose: Retrieve detailed information about a specific product, including seller details, pricing variations, and stock availability.

4. **Order Management:**

    - **GET `/api/orders`**
        - Purpose: Retrieve a list of pending orders awaiting fulfillment, including order details, customer information, and order processing status, accessible to warehouse administrators.

    - **GET `/api/orders/:id`**
        - Purpose: Retrieve detailed information about a specific order, including order items, shipping details, payment status, and order fulfillment progress, accessible to warehouse administrators.

    - **PUT `/api/orders/:id`**
        - Purpose: Update the status of an order, including order processing, picking, packing, shipping, and delivery confirmation, accessible to warehouse administrators.

5. **Delivery Personnel:**

    - **GET `/api/delivery/orders`**
        - Purpose: Retrieve a list of assigned delivery orders for a delivery personnel, including order details and delivery status.

    - **PUT `/api/delivery/orders/:id`**
        - Purpose: Update the status of a delivery order, including marking it as delivered, canceled, or in-transit, accessible to delivery personnel.

6. **Superadmin Actions:**

    - **GET `/api/superadmin/admins`**
        - Purpose: Retrieve a list of all administrators registered in the system.

    - **POST `/api/superadmin/admins`**
        - Purpose: Create a new administrator account with specified details such as username, password, and role.

    - **PUT `/api/superadmin/admins/:id`**
        - Purpose: Update details of a specific administrator, such as username, password, or role.

    - **DELETE `/api/superadmin/admins/:id`**
        - Purpose: Delete an existing administrator account from the system.

    - **GET `/api/superadmin/warehouses`**
        - Purpose: Retrieve a list of all warehouses registered in the system.

    - **POST `/api/superadmin/warehouses`**
        - Purpose: Create a new warehouse with specified details such as location, capacity, and contact information.

    - **PUT `/api/superadmin/warehouses/:id`**
        - Purpose: Update details of a specific warehouse, such as location, capacity, or contact information.

    - **DELETE `/api/superadmin/warehouses/:id`**
        - Purpose: Delete an existing warehouse from the system.

    - **POST `/api/superadmin/orders/assign/:warehouse_id`**
        - Purpose: Assign a batch of orders to a specific warehouse for further processing by administrators of that warehouse.

7. **Analytics and Insights:**

    - **GET `/api/analytics/inventory`**
        - Purpose: Access analytics and insights into inventory trends, stock movements, SKU performance, stockout incidents, and forecasted demand for warehouse administrators.

    - **GET `/api/analytics/orders`**
        - Purpose: Analyze order processing metrics, order fulfillment rates, shipping times, and customer satisfaction scores for warehouse administrators to optimize warehouse operations.

### Data Requirements:

- **User Data:**
    - Username (string)
    - Password (string)
    - Role (string: "admin", "delivery_personnel", or "superadmin")

- **Inventory Data:**
    - SKU (string)
    - Product Name (string)
    - Description (string)
    - Stock Quantity (integer)
    - Replenishment Status (string)
    - Seller (string)
    - Price (decimal)

- **Product Data:**
    - Name (string)
    - Description (string)
    - Seller (string)
    - Price (decimal)
    - Stock Quantity (integer)

- **Order Data:**
    - Order ID (integer)
    - Customer Information (object)
    - Order Items (array of objects)
    - Shipping Details (object)
    - Payment Status (string)
    - Order Status (string)
