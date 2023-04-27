import { assert, expect, test } from 'vitest'
import { getHeaderTitle } from '../../components/NavBar/TopNavBar';
import { NavItem } from '../../App';
import React from 'react';


const MockComponent = () => null;


test('getHeaderTitle should return the correct title when there is a single matching path', () => {
    
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

  const currentPath = '/order'
  const expectedTitle = 'Order' 

  const result = getHeaderTitle(navItems, currentPath)
  expect(result).toBe(expectedTitle)
})

test('getHeaderTitle should return "Inventorio" when there are multiple matching paths', () => {
    const navItems: NavItem[] = [
        {
            title: 'Order',
            path: '/orders',
            element: React.createElement(MockComponent)
        },
        {
            title: 'Order',
            path: '/ohrders',
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

  const currentPath = '/orders'
  const expectedTitle = 'Inventorio'

  const result = getHeaderTitle(navItems, currentPath)
  expect(result).toBe(expectedTitle)
})

test('getHeaderTitle should return "Inventorio" when there are no matching paths', () => {
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
