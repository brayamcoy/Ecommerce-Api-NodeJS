const auth = require("./auth");
const categories = require("./categories");
const cc_transactions = require("./cc_transactions");
const coupons = require("./coupons");
const order_products = require("./order_products");
const product_categories = require("./product_categories");
const product_statuses = require("./product_statuses");
const product_tags = require("./product_tags");
const products = require("./products");
const roles = require("./roles");
const sales_orders = require("./sales_orders");
const sessions = require("./sessions");
const tags = require("./tags");
const user_roles = require("./user_roles");
const users = require("./users");
const stripe = require("./stripe");

const routes = (app) => {
  const API = process.env.API_VERSION;
  app.use(`/api/v${API}/auth`, auth);
  app.use(`/api/v${API}/categories`, categories);
  app.use(`/api/v${API}/cc-transactions`, cc_transactions);
  app.use(`/api/v${API}/coupons`, coupons);
  app.use(`/api/v${API}/order-products`, order_products);
  app.use(`/api/v${API}/product-categories`, product_categories);
  app.use(`/api/v${API}/product-statuses`, product_statuses);
  app.use(`/api/v${API}/product-tags`, product_tags);
  app.use(`/api/v${API}/products`, products);
  app.use(`/api/v${API}/roles`, roles);
  app.use(`/api/v${API}/sales-orders`, sales_orders);
  app.use(`/api/v${API}/sessions`, sessions);
  app.use(`/api/v${API}/tags`, tags);
  app.use(`/api/v${API}/user-roles`, user_roles);
  app.use(`/api/v${API}/users`, users);
  app.use(`/api/v${API}/checkout`, stripe)
};

module.exports = routes;
