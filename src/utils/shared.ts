export const arePathsMatched = (currentPath: string, path: string) : boolean => {
    if (currentPath === path) {
      return true
    }
    
    if (path.endsWith('/') && currentPath === path.slice(0, -1)) {
      return true
    }
    
    const [pathName, pathQuery] = path.split('?')
    const [currentPathName, currentPathQuery] = currentPath.split('?')
    
    if (pathQuery && !currentPathQuery) {
      return false
    }
    
    if (pathQuery && currentPathQuery) {
      const pathParams = new URLSearchParams(pathQuery)
      const currentPathParams = new URLSearchParams(currentPathQuery)
      
      for (const [key, value] of pathParams) {
        if (currentPathParams.get(key) !== value) {
          return false
        }
      }
      
      for (const [key, value] of currentPathParams) {
        if (pathParams.get(key) !== value) {
          return false
        }
      }
    }
    
    return pathName === currentPathName
  }


//   export const arePathsMatched = (currentPath: string, path: string): boolean => {
//     // Remove the query string if any and the trailing slash.
//     const cleanPath = (inputPath: string) =>
//       inputPath.split('?')[0].replace(/\/$/, '');
  
//     // Compare the cleaned paths.
//     return cleanPath(currentPath) === cleanPath(path);
//   };