﻿$pathToManifest = '..\src\www\public\manifest.appcache'

$currentPath = $Pwd
cd ..\src\www\public
$pathToRemove = $Pwd
$pathToRemoveString = $pathToRemove.ToString().Replace('\', '\\') + '\\'
cd $currentPath

# Clear current file
Out-File -Encoding utf8 $pathToManifest

# Title
'CACHE MANIFEST' | Out-File -Append -Encoding utf8 $pathToManifest

# A random string in order to update the appcache
$hash = .\createRandomString.ps1
$hash + [Environment]::NewLine | Out-File -Append -Encoding utf8 $pathToManifest

# Warning
'# This manifest is auto-generated by createManifest.ps1' + [Environment]::NewLine + '# in the tools dir. Do not modify this file directly!' + [Environment]::NewLine | Out-File -Append -Encoding utf8 $pathToManifest

# All resources being cached
'CACHE:' | Out-File -Append -Encoding utf8 $pathToManifest
Get-ChildItem -Path ..\src\www\public -Recurse -File | % { $_.FullName.ToString() -replace($pathToRemoveString, '') -replace('\\', '/') | Out-File -Append -Encoding utf8 $pathToManifest }
"../scripts/boundle.min.js" + [Environment]::NewLine | Out-File -Append -Encoding utf8 $pathToManifest

# Allow network trafic
'NETWORK:' | Out-File -Append -Encoding utf8 $pathToManifest
'*' | Out-File -Append -Encoding utf8 $pathToManifest