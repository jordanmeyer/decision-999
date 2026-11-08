// jstat 1.9.6: only the deterministic functions used by the recipe.
// Extend from verified package behavior when the app needs another function.
declare module 'jstat' {
  const stats: {
    jStat: {
      mean(values: number[]): number;
      variance(values: number[], sample?: boolean): number;
    };
  };
  export default stats;
}
