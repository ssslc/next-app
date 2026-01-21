'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDeviceMenuOpen, setIsDeviceMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const deviceDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (deviceDropdownRef.current && !deviceDropdownRef.current.contains(event.target as Node)) {
        setIsDeviceMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleDeviceMenu = () => {
    setIsDeviceMenuOpen(!isDeviceMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">设备管理系统</div>
        <div className="flex space-x-4 relative">
          <Link 
            href="/" 
            className={`px-3 py-2 rounded hover:bg-gray-700 transition-colors ${
              pathname === '/' ? 'bg-gray-600' : ''
            }`}
          >
            首页
          </Link>
          {/* 设备管理下拉菜单 */}
          <div className="relative" ref={deviceDropdownRef}>
            <button
              onClick={toggleDeviceMenu}
              className={`px-3 py-2 rounded hover:bg-gray-700 transition-colors ${
                pathname.startsWith('/devices') ? 'bg-gray-600' : ''
              }`}
            >
              设备管理
              <svg
                className={`ml-1 h-4 w-4 inline-block transition-transform ${
                  isDeviceMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDeviceMenuOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/devices"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDeviceMenuOpen(false)}
                >
                  设备列表
                </Link>
                <Link
                  href="/devices/alarms"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDeviceMenuOpen(false)}
                >
                  设备告警
                </Link>
              </div>
            )}
          </div>
          
          {/* 用户管理下拉菜单 */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleUserMenu}
              className={`px-3 py-2 rounded hover:bg-gray-700 transition-colors ${
                pathname.startsWith('/user') ? 'bg-gray-600' : ''
              }`}
            >
              用户管理
              <svg
                className={`ml-1 h-4 w-4 inline-block transition-transform ${
                  isUserMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isUserMenuOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/user/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  个人信息
                </Link>
                <Link
                  href="/user/permissions"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  权限信息
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}