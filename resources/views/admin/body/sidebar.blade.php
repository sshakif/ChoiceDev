<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <div id="sidebar-menu">
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" data-key="t-menu">Menu</li>

                <!-- Dashboard -->
                <li>
                    <a href="{{ route('admin.dashboard') }}" class="waves-effect">
                        <i data-feather="home"></i>
                        <span data-key="t-dashboard">Dashboard</span>
                    </a>
                </li>

                <!-- Home Section -->
                @canAny(['category-mangement'])
                    <li>
                        <a href="{{ route('category.list') }}">
                            <i data-feather="layout"></i>
                            <span data-key="t-apps">Category</span>
                        </a>
                    </li>
                @endcan

                @canAny(['admin'])
                    <li>
                        <a href="{{ route('about.list') }}">
                            <i data-feather="briefcase"></i>
                            <span data-key="t-apps">About</span>
                        </a>
                    </li>
                @endcan

                @canAny(['admin'])
                    <li>
                        <a href="{{ route('service.list') }}">
                            <i data-feather="briefcase"></i>
                            <span data-key="t-apps">Services</span>
                        </a>
                    </li>
                @endcan


                @canAny(['admin'])
                    <li>
                        <a href="javascript: void(0);" class="has-arrow">
                            <i data-feather="crosshair"></i>
                            <span data-key="t-email">User Management</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li><a href="{{ route('assign.role') }}">User List</a></li>
                            <li><a href="{{ route('role') }}">Roles & Permissions</a></li>
                        </ul>
                    </li>
                @endcan
        </div>
    </div>
</div>

<!-- Feather Icon Initialization -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        feather.replace();
    });
</script>
