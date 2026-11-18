import 'just/nix.just'
import 'just/web.just'
import 'just/editorconfig.just'
import 'just/typos.just'
import 'just/lychee.just'
import 'just/git.just'
import 'just/github.just'

# List all commands
default:
    @just --list

# Run every check before pushing
[group('ci')]
ci:
    @just nix-lint
    @just fmt-check
    @just lint
    @just check
    @just test
    @just build
    @just editorconfig
    @just typos
    @just links
    @just workflows
