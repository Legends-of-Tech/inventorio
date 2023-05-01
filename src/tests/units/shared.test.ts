import { assert, expect, test } from 'vitest'
import { arePathsMatched } from '../../utils/shared'

// Edit an assertion and save to see HMR in action

test.each([
  ['/a', '/a', true],
  ['/a', '/a/', true],
  ['/a/b', '/a/b', true],
  ['/a/b', '/a/b/', true],
  ['/a?b', '/a', true]
])('arePathMatched should return true when given two matched paths', (currentPath: string, path: string, expected: boolean) => {
  const result = arePathsMatched(currentPath, path)
  
  expect(result).toBe(expected)
})

test.each([
  ['/a', '/b', false],
])('arePathMatched should return false when given two unmatched paths', (currentPath: string, path: string, expected: boolean) => {
  const result = arePathsMatched(currentPath, path)
  
  expect(result).toBe(expected)
})
