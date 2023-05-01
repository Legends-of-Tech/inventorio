export const arePathsMatched = (currentPath: string, path: string): boolean => {
  // Remove the query string if any and the trailing slash.
  const cleanPath = (inputPath: string) =>
    inputPath.split('?')[0].replace(/\/$/, '');

  // Extract the pathnames.
  const currentPathname = cleanPath(currentPath);
  const pathname = cleanPath(path);

  // Compare the pathnames, considering a single slash and an empty string as equal.
  return (
    currentPathname === pathname ||
    (currentPathname === '' && pathname === '/') ||
    (currentPathname === '/' && pathname === '')
  );
};


// test.each([
//   ['/a', '/a', true],
//   ['/a', '/a/', true],
//   ['/a/b', '/a/b', true],
//   ['/a/b', '/a/b/', true],
//   ['/inventory?category=aodai', '/invetory', true]
// ])('arePathMatched should return true when given two matched paths', (currentPath: string, path: string, expected: boolean) => {
//   const result = arePathsMatched(currentPath, path)
  
//   expect(result).toBe(expected)
// })

// test.each([
//   ['/a', '/b', false],