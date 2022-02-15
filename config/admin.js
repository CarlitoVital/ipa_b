module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01e1f84376d68a2631616a86dfa0ab01'),
  },
});
