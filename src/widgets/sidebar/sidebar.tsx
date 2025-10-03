'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Facebook, Twitter, Instagram } from 'lucide-react';
import { UserCard, ContactInfo } from '@/entities/user';
import { Typography } from '@/shared/ui';
import { User } from '@/shared/api/types';

interface SidebarProps {
  user: User;
}

export function Sidebar({ user }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
  };

  return (
    <motion.aside
      initial={{ height: 'auto' }}
      animate={{ height: isExpanded ? 'auto' : 'auto' }}
      className="rounded-xl border border-jet bg-eerie-black-2 p-4 shadow-shadow-1"
    >
      <div className="space-y-4">
        <UserCard user={user} variant="sidebar" />
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between rounded-lg bg-gradient-to-br from-jet to-onyx p-3 text-orange-yellow-crayola transition-all hover:from-orange-yellow-crayola hover:to-orange-yellow-crayola/80 hover:text-smoky-black"
        >
          <span className="text-fs-8">Show Contacts</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="h-px bg-jet" />
              
              <ContactInfo user={user} />
              
              <div className="h-px bg-jet" />
              
              <div className="flex space-x-4">
                {user.socialLinks.map((link) => {
                  const IconComponent = socialIcons[link.platform];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      className="text-light-gray-70 transition-colors hover:text-light-gray"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
