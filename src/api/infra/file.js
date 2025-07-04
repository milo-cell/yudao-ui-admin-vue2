import request from '@/utils/request'

// 删除文件
export function deleteFile(id) {
  return request({
    url: '/infra/file/delete?id=' + id,
    method: 'delete'
  })
}

// 批量删除文件
export function deleteFileList(ids) {
  return request({
    url: `/infra/file/delete-list?ids=${ids.join(',')}`,
    method: 'delete'
  })
}

// 获得文件分页
export function getFilePage(query) {
  return request({
    url: '/infra/file/page',
    method: 'get',
    params: query
  })
}
