import { Slash } from 'lucide-react'
import Image from 'next/image'

import { ability } from '@/auth/auth'

import rocketseratIcon from '../assets/rocketseat-icon.svg'
import { OrganizationSwitcher } from './organization-swithcher'
import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()
  return (
    <div className="maz-w-[1200px] mx-auto flex items-center justify-between border-b pb-2">
      <div className="flex items-center gap-3">
        <Image
          src={rocketseratIcon}
          className="size-6 dark:invert"
          alt="Rocketseat"
        />
        <Slash className="size-3 -rotate-[24deg] text-border " />

        <OrganizationSwitcher />
      </div>

      {permissions?.can('get', 'Project') && <p>Projetos</p>}
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-5" />
        <ProfileButton />
      </div>
    </div>
  )
}
