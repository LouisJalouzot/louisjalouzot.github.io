---
createdDate: 2025-05-16
publish: true
tags: 
project:
  - Karavela
type:
  - hub
---
# To do
- [x] Use `rclone` over ssh (need `rclone>=1.64.0` I believe):
`rclone --progress --checkers 4 --transfers 1 copy input/ ':sftp,ssh="ssh jz":target/'`
- [ ] Install [siemens_to_ismrmrd](https://github.com/ismrmrd/siemens_to_ismrmrd) (when partition `compil` up, try the `cmake` part) c.f. [[Siemens to ISMRMRD]]