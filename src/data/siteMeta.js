import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
const siteMeta = {
  title: 'Manu Rajput',
  description:
    'Manu Rajput is a undergrad, software developer, traveller and a web3 enthusiast.',
  copyright: 'Manu Rajput',
  credits: 'Made with ❤️ using ',
  author: {
    name: 'Manu Rajput',
    email: 'manurajput2911@gmail.com',
    twitter: 'https://twitter.com/distroinfinity',
    instagram: 'https://www.instagram.com/distroinfinity/',
    github: 'https://github.com/distroinfinity',
    linkedin: 'https://www.linkedin.com/in/manurajput2911/',
  },
  siteUrl: 'https://brian.dev',
}
export const resume = [
  {
    company: 'Amazon',
    title: 'Principal Developer Advocate',
    logo: logoAmazon,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Microsoft',
    title: 'Principal Cloud Developer Advocate',
    logo: logoMicrosoft,
    start: '2017',
    end: '2022',
  },
  {
    company: 'XOR Data Exchange',
    title: 'CIO',
    logo: logoXOR,
    start: '2014',
    end: '2016',
  },
  {
    company: 'Clarity Services, Inc.',
    title: 'COO',
    logo: logoClarity,
    start: '2008',
    end: '2014',
  },
]
export const projects = [
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: {
      href: 'https://github.com/bketelsen/captainhook',
      label: 'github.com',
    },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    link: {
      href: 'https://github.com/kubernetes/kubernetes',
      label: 'github.com',
    },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description: 'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },
]

export default siteMeta
