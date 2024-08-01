import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';
import { DarkModeContext } from '../DarkModeContext';

export default function Footer() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <footer className={`lg:grid lg:grid-cols-5 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`} dir="rtl">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="footer_picture.jpg"
          alt="Footer Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">إتصل بنا</span>
              <a href="tel:0123456789" className="block text-2xl font-medium hover:opacity-75 sm:text-3xl">
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm">
              <li>الإثنين إلي الجمعة: 10ص - 5م</li>
              <li>نهاية الأسبوع: 10ص - 3م</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <a href="https://facebook.com" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium">الخدمات</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="transition hover:opacity-75">خدمة 1</a></li>
                <li><a href="#" className="transition hover:opacity-75">خدمة 2</a></li>
                <li><a href="#" className="transition hover:opacity-75">خدمة 3</a></li>
                <li><a href="#" className="transition hover:opacity-75">خدمة 4</a></li>
                <li><a href="#" className="transition hover:opacity-75">خدمة 5</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium">الشركة</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="transition hover:opacity-75">حول</a></li>
                <li><a href="#" className="transition hover:opacity-75">تواصل معنا</a></li>
                <li><a href="#" className="transition hover:opacity-75">آراء العملاء</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li><a href="#" className="transition hover:opacity-75">البنود والظروف</a></li>
              <li><a href="#" className="transition hover:opacity-75">سياسة الخصوصية</a></li>
              <li><a href="#" className="transition hover:opacity-75">ملفات تعريف الارتباط</a></li>
            </ul>
            <p className="mt-8 text-xs sm:mt-0">&copy; 2024. مؤسسة الماسة - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
