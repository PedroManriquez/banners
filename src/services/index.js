import bannersData from './api/data/banners'
import Resource from './api/Resource'

export let banners = new Resource('banners', bannersData.data)
