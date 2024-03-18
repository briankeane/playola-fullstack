export function index(req, res) {
    res.status(200).json({ healthy: true });
}
export default {
    index,
};
