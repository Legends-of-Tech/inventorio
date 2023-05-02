import { assert, expect, test, describe } from 'vitest'
import { getHeaderTitle, isChildPage } from '../../components/NavBar/TopNavBar';
import { NavItem } from '../../App';
import React from 'react';


const MockComponent = () => null;










// All tests within this suite will be run in parallel
describe.concurrent('getHeaderTitle', () => {
    test('should return the correct title when there is a single matching path', () => {
    
        const navItems: NavItem[] = [
            {
                title: 'Order',
                path: '/order',
                element: React.createElement(MockComponent)
            },
            {
                title: 'Create Order',
                path: '/orders/create-order-page',
                element: React.createElement(MockComponent)
            },
            {
                title: 'Inventory',
                path: '/inventory',
                element: React.createElement(MockComponent)
        
            },
            {
                title: 'Customer',
                path: '/Customer',
                element: React.createElement(MockComponent)
            },
        ];
    
      const currentPath = '/order'
      const expectedTitle = 'Order' 
    
      const result = getHeaderTitle(navItems, currentPath)
      expect(result).toBe(expectedTitle)
    })


    test('should return "Inventorio" when there are multiple matching paths', () => {
        const navItems: NavItem[] = [
            {
                title: 'Order',
                path: '/orders',
                element: React.createElement(MockComponent)
            },
            {
                title: 'Orders',
                path: '/orders/',
                element: React.createElement(MockComponent)
            },
        ];
    
      const currentPath = '/orders'
      const expectedTitle = 'Inventorio'
    
      const result = getHeaderTitle(navItems, currentPath)
      expect(result).toBe(expectedTitle)
    })
    

    test('should return "Inventorio" when there are no matching paths', () => {
        const navItems: NavItem[] = [
            {
                title: 'Order',
                path: '/orders',
                element: React.createElement(MockComponent)
            },
            {
                title: 'Create Order',
                path: '/orders/create-order-page',
                element: React.createElement(MockComponent)
            },
            {
                title: 'Inventory',
                path: '/inventory',
                element: React.createElement(MockComponent)
        
            },
            {
                title: 'Customer',
                path: '/Customer',
                element: React.createElement(MockComponent)
            },
        ];
    
      const currentPath = '/nonexistent'
      const expectedTitle = 'Inventorio'
    
      const result = getHeaderTitle(navItems, currentPath)
      expect(result).toBe(expectedTitle)
    })
  })




  // All tests within this suite will be run in parallel
describe.concurrent.only('isChildPage', () => {
    test('should return True when it is child page', () => { 
        // Arrange - Data to test
        const currentPath = 'orders/create-order-page';
        // Action - Call the test function
        const result =  isChildPage(currentPath);
        // Assert - Test the result of the function
        expect(result).toBeTruthy()
        
    })
    test('should return False when it is root page', () => { 
        // Arrange - Data to test
        const currentPath = 'orders/';
        // Action - Call the test function
        const result =  isChildPage(currentPath);
        // Assert - Test the result of the function
        expect(result).toBeFalsy()
     })
 
  })